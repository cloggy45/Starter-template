import { SectionHeader } from "@component/section/SectionHeader";
import { DashboardLayout } from "@component/layout/dashboardLayout";
import { Button } from "@component/buttons/Button";
import { useSession } from "next-auth/react";
import { api } from "@utils/api";
import { useRouter } from "next/router";
import { Route } from "@component/layout/defaultLayout";
import { useState } from "react";
import { ModalDialog } from "@component/modal/ModalDialog";
import { toast } from "react-toastify";

export default function SettingsPage() {
  const [showModal, setShowModal] = useState(false);
  const { push } = useRouter();
  const { data: sessionData } = useSession();
  const userId = sessionData?.user.id;

  const { mutateAsync: stripeBillingPortal } =
    api.stripe.createBillingPortalSession.useMutation();

  const mutation = api.user.deleteUser.useMutation({
    onSuccess: () => {
      void push(Route.FEATURES);
    },
    onError: () => {
      toast.error("Failed to delete account, try again");
    },
  });

  function deleteAccount() {
    mutation.mutate({ id: userId as string });
  }

  async function manageSubscriptions() {
    const portal = await stripeBillingPortal();
    window.location.href = portal.billingPortalUrl;
  }

  return (
    <div>
      <SectionHeader header={"Settings"} />
      <ModalDialog
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Confirm Account Deletion"}
        content={
          "Are you sure you want to delete your account? This action cannot be undone."
        }
        acceptLabel={"Delete Account"}
        callback={deleteAccount}
        denyLabel={"Cancel"}
      />
      <ul className={"px-6"}>
        <li className={"p-2"}>
          <Button
            variant={"secondary"}
            size={"sm"}
            handleClick={manageSubscriptions}
            label={"Manage Subscription"}
          />
        </li>
        <li className={"p-2"}>
          <Button
            handleClick={() => {
              setShowModal(true);
            }}
            label={"Delete Account"}
            size={"sm"}
          />
        </li>
      </ul>
    </div>
  );
}

SettingsPage.getLayout = function getLayout(page: JSX.Element) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
