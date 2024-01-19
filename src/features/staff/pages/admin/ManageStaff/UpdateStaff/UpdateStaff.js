import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { useEffect } from "react";

import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import HubInput from "~/features/hub/components/input/HubInput/HubInput";
import { updateStaff } from "~/features/staff/api/api";
import schemas from "~/features/staff/config/schemas";

UpdateStaff.propTypes = {
  item: PropTypes.object,
};

function UpdateStaff({ item, setShowUpdate }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => updateStaff(item.id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setShowUpdate(false);
    }
  }, [mutation.isSuccess, setShowUpdate]);
  return (
    <>
      <Formik
        initialValues={{
          name: `${item.name}`,
          hubId: `${item.hubId}`,
        }}
        validationSchema={schemas.addStaff}
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ resetForm }) => (
          <Form className="mt-2">
            <div>
              <Field name="name">
                {({ field, form, meta }) => (
                  <>
                    <GeneralInput
                      label="Name: "
                      type="text"
                      field={field}
                      form={form}
                      meta={meta}
                    />
                  </>
                )}
              </Field>
              <Field name="hubId">
                {({ field, form, meta }) => (
                  <>
                    <HubInput
                      label="Hub: "
                      field={field}
                      form={form}
                      meta={meta}
                    />
                  </>
                )}
              </Field>
            </div>
            <div className="row mt-3">
              <div className="col">
                <button
                  className="btn btn-primary me-3 btn-sm"
                  type="submit"
                  disabled={mutation.isPending}
                >
                  Submit
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  type="reset"
                  onClick={() => resetForm()}
                >
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <NotificationApi response={mutation}>
        {mutation.isSuccess && (
          <>
            <p>Staff is updated</p>
            <p className="m-0">Name: {mutation.data.data.name} </p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">HubId: {mutation.data.data.hubId}</p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default UpdateStaff;
