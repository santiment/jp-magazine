import React, { PureComponent } from 'react'
import cx from 'classnames'
import { graphql } from 'react-apollo'
import GoogleAnalytics from 'react-ga'
import Panel from '@santiment-network/ui/Panel/Panel'
import Label from '@santiment-network/ui/Label'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import { EMAIL_LOGIN_MUTATION } from './loginGql'
import styles from './SubscriptionForm.module.scss'

const SUBSCRIPTION_FLAG = 'SUBSCRIPTION_FLAG'

class SubscriptionForm extends PureComponent {
    state = {
        email: '',
        error: undefined
    }

    componentWillUnmount () {
        clearTimeout(this.timeout)
    }

    onSubmit = e => {
        e.preventDefault()
        const { email, error,  waiting } = this.state

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
                /*GoogleAnalytics.event({
                    category: 'User',
                    action: `User requested an email for subscription`
                })*/
            })
            .catch(error => {
                this.setState({ waiting: false })
            })
    }

    onSelect = (_, { selectedIndexes: { length } }) => {
        if (!length) {
            localStorage.removeItem(SUBSCRIPTION_FLAG)
        } else {
            localStorage.setItem(SUBSCRIPTION_FLAG, '+')
        }
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
        const { error, waiting } = this.state

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
                        placeholder='business@email.com'
                        disabled={waiting}
                        onChange={this.onEmailChangeDebounced}
                        isError={error}
                    />
                    <Button
                        variant='fill'
                        accent='positive'
                        className={styles.subscription__btn}
                        disabled={waiting}
                        type='submit'
                    >
                        {waiting ? 'Waiting...' : 'Let’s Go'}
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