import React, { PureComponent } from 'react'
import cx from 'classnames'
import { graphql } from 'react-apollo'
import GoogleAnalytics from 'react-ga'
import Panel from '@santiment-network/ui/Panel/Panel'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import Checkboxes from '@santiment-network/ui/Checkboxes'
import { EMAIL_LOGIN_MUTATION } from './loginGql'
// import { store } from '../../index'
// import { showNotification } from '../../actions/rootActions'
import styles from './SubscriptionForm.module.scss'

const SUBSCRIPTION_FLAG = 'SUBSCRIPTION_FLAG'

const SUBSCRIPTION_LABEL = 'Receive product updates and weekly newsletter'

class SubscriptionForm extends PureComponent {
    state = {
        email: '',
        error: undefined,
        hasSubscribed: true
    }

    componentWillUnmount () {
        clearTimeout(this.timeout)
    }

    onSubmit = e => {
        e.preventDefault()
        const { email, error, hasSubscribed, waiting } = this.state

        if (error || waiting) {
            return
        }

        if (!email) {
            this.setState({ error: 'Email is required' })
            return
        }

        this.setState({ waiting: true })

        const { emailLogin } = this.props

        emailLogin({ variables: { email } })
            .then(() => {
                this.setState({ waiting: false })
                GoogleAnalytics.event({
                    category: 'User',
                    action: `User requested an email for verification ${
                        hasSubscribed ? 'with' : 'without'
                    } subscription`
                })
                /*store.dispatch(
                    showNotification({
                        variant: 'success',
                        title: `Verification email has been sent to "${email}"`,
                        dismissAfter: 8000
                    })
                )*/
            })
            .catch(error => {
                this.setState({ waiting: false })
                /*store.dispatch(
                    showNotification({
                        variant: 'error',
                        title: `We got an error while generating verification email. Please try again`,
                        dismissAfter: 8000
                    })
                )*/
            })
    }

    onSelect = (_, { selectedIndexes: { length } }) => {
        if (!length) {
            localStorage.removeItem(SUBSCRIPTION_FLAG)
        } else {
            localStorage.setItem(SUBSCRIPTION_FLAG, '+')
        }
        this.setState({ hasSubscribed: !!length })
    }

    onEmailChange (email) {
        let error
        if (!email) {
            error = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            error = 'Invalid email address'
        }

        this.setState({ email, error })
    }

    onEmailChangeDebounced = ({ currentTarget: { value } }) => {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => this.onEmailChange(value), 500)
    }

    render () {
        const { error, waiting, email } = this.state
        const { hideCheckbox } = this.props

        return (
            <>
                <form
                    className={cx(
                        styles.subscription__form,
                        error && styles.subscription__form_error
                    )}
                    onSubmit={this.onSubmit}
                >
                    <Input
                        className={styles.subscription__input}
                        placeholder='Enter your email'
                        disabled={waiting}
                        onChange={this.onEmailChangeDebounced}
                        isError={error}
                    />
                    {!hideCheckbox && (
                        <Checkboxes
                            className={styles.subscription__checkbox}
                            options={[SUBSCRIPTION_LABEL]}
                            labelOnRight
                            labelClassName={styles.subscription__label}
                            defaultSelectedIndexes={[SUBSCRIPTION_LABEL]}
                            disabledIndexes={
                                waiting || !email ? [SUBSCRIPTION_LABEL] : undefined
                            }
                            onSelect={this.onSelect}
                        />
                    )}
                    <Button
                        variant='fill'
                        accent='positive'
                        className={styles.subscription__btn}
                        disabled={waiting}
                        type='submit'
                    >
                        {waiting ? 'Waiting...' : 'Get started'}
                    </Button>
                    <Panel padding className={styles.subscription__error}>
                        <Label accent='persimmon'>{error}</Label>
                    </Panel>
                </form>
            </>
        )
    }
}

export default graphql(EMAIL_LOGIN_MUTATION, { name: 'emailLogin' })(
    SubscriptionForm
)