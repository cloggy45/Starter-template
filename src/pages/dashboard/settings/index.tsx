import { SectionHeader } from "@component/section/SectionHeader";
import { DashboardLayout } from "@component/layout/dashboardLayout";
import { Button } from "@component/buttons/Button";
import { useSession } from "next-auth/react";
import { api } from "@utils/api";
import { useRouter } from "next/router";
import { Route } from "@component/layout/defaultLayout";
import { useState } from "react";
import { ModalDialog } from "@component/modal/ModalDialog";

export default function SettingsPage() {
  const [showModal, setShowModal] = useState(false);
  const { push } = useRouter();
  const { data: sessionData } = useSession();
  const userId = sessionData?.user.id;

  const mutation = api.user.deleteUser.useMutation({
    onSuccess: () => {
      void push(Route.FEATURES);
    },
  });

  function deleteAccount() {
    mutation.mutate({ id: userId as string });
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
      <Button
        handleClick={() => {
          setShowModal(true);
        }}
        label={"Delete Account"}
        variant={"md"}
      />
    </div>
  );
}

SettingsPage.getLayout = function getLayout(page: JSX.Element) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
