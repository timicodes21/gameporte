import MailchimpSubscribe from 'react-mailchimp-subscribe';
import WaitlistForm from './WaitlistForm';

interface WaitlistFormProps {
  status: string;
  message: string;
  onValidated: (formData: any) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface JoinWaitlistMailChimpProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const JoinWaitlistMailChimp: React.FC<JoinWaitlistMailChimpProps> = ({
  setShow,
}) => {
  const MAILCHIMP_URL =
    'https://gameporte.us21.list-manage.com/subscribe/post?u=19951691a0b120ec239a37664&amp;id=30db845065&amp;f_id=00dbc6e1f0';

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props: any) => {
        const { subscribe, status, message } = props || {};
        return (
          <WaitlistForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
            setShow={setShow}
          />
        );
      }}
    />
  );
};

export default JoinWaitlistMailChimp;
