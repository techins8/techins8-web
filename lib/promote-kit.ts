declare global {
  interface Window {
    promotekit_referral: string;
    promotekit: {
      refer: (email: string, stripe_customer_id?: string) => void;
    };
  }
}

export const getPromoteKitReferral = () => {
  if (typeof window === "undefined") return undefined;
  return window?.promotekit_referral ?? undefined;
};

export const addUserToPromoteKit = ({
  email,
  stripe_customer_id,
}: {
  email: string;
  stripe_customer_id?: string;
}) => {
  if (typeof window === "undefined") return;
  return window?.promotekit?.refer(email, stripe_customer_id);
};
