import React, { PureComponent } from "react";
import { navigate } from "gatsby";
import cx from "classnames";
import tr from "../../translations/translate";
import GoogleAnalytics from "react-ga";
import { graphql } from "react-apollo";
import Label from "@santiment-network/ui/Label";
import Button from "@santiment-network/ui/Button";
import Input from "@santiment-network/ui/Input";
import { SUBSCRIPTION_MUTATION } from "./loginGql";
import styles from "./SubscriptionForm.module.scss";

const SUBSCRIPTION_FLAG = "SUBSCRIPTION_FLAG";


/*
*
* <Label accent="waterloo" className={styles.label}>
            Message
          </Label>
          <textarea
            placeholder="Type your message here..."
            disabled={waiting}
            onChange={this.onMessageChangedDebounced}
            className={styles.messageField}
          ></textarea>
* */

const LANG_ENUM = {
  en: "EN",
  ja: "JP"
}

class SubscriptionForm extends PureComponent {
  state = {
    email: "",
    error: undefined
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, error, message = "", waiting } = this.state;

    if (error || waiting) {
      return;
    }

    if (!email) {
      this.setState({ error: "Email is required" });
      return;
    }

    this.setState({ waiting: true });

    const { sendPromoCoupon } = this.props;

    let lang = 'en'
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
     lang = localStorage.getItem('lang') || 'en'
   }

    sendPromoCoupon({ variables: { email, message, lang: LANG_ENUM[lang] } })
      .then(() => {
        this.setState({ waiting: false });
        GoogleAnalytics.event({
          category: "User",
          action: `User requested an email for subscription`
        });
        navigate("/thankyou");
      })
      .catch(error => {
        this.setState({ waiting: false });
      });
  };

  onSelect = (_, { selectedIndexes: { length } }) => {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    if (!length) {
      localStorage.removeItem(SUBSCRIPTION_FLAG);
    } else {
      localStorage.setItem(SUBSCRIPTION_FLAG, "+");
    }
  }
  };

  onEmailChange(email) {
    let error;
    if (!email) {
      error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error = "Invalid email address";
    }

    this.setState({ ...this.state, email, error });
  }

  onMessageChange(message) {
    this.setState({ ...this.state, message });
  }

  onEmailChangeDebounced = ({ currentTarget: { value } }) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.onEmailChange(value), 500);
  };

  onMessageChangedDebounced = ({ currentTarget: { value } }) => {
    clearTimeout(this.messageChangeTimeout);
    this.messageChangeTimeout = setTimeout(
      () => this.onMessageChange(value),
      500
    );
  };

  render() {
    const { error, waiting } = this.state;

    return (
      <>
        <form
          className={cx(
            styles.subscription__form,
            error && styles.subscription__form_error
          )}
          onSubmit={this.onSubmit}
        >
          <div className={styles.emailBlock}>
            <Label accent="waterloo" className={styles.label}>
              {tr('app.body.form.email')} <span className={styles.requiredSuffix}>*</span>
            </Label>
            <Input
              className={styles.subscription__input}
              placeholder="business@email.com"
              disabled={waiting}
              onChange={this.onEmailChangeDebounced}
              isError={error}
            />
            {error && (
              <Label accent="persimmon" className={styles.formError}>
                {error}
              </Label>
            )}
          </div>


          <Button
            variant="fill"
            accent="positive"
            className={styles.subscription__btn}
            disabled={waiting}
            type="submit"
          >
            {waiting ? tr('app.body.form.button.waiting') : tr('app.body.form.button')}
          </Button>
        </form>
      </>
    );
  }
}

export default graphql(SUBSCRIPTION_MUTATION, { name: "sendPromoCoupon" })(
  SubscriptionForm
);
