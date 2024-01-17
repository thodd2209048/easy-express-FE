import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import HubInput from "~/features/hub/components/input/HubInput/HubInput";

import { addStaff } from "~/features/staff/api/api";
import schemas from "~/features/staff/config/schemas";
import SubContentLayout from "~/layouts/SubContentLayout/SubContentLayout";

AddStaff.propTypes = {};

function AddStaff(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
    },
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          hubId: "",
        }}
        validationSchema={schemas.addStaff}
        onSubmit={(values) => {
          console.log(values);
          mutation.mutate(values);
        }}
      >
        {({ errors, touched, resetForm }) => {
          return (
            <Form className="mt-3">
              <SubContentLayout subTitle="Enter new staff's information">
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
                      className="btn btn-primary me-3"
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      type="reset"
                      onClick={() => resetForm()}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </SubContentLayout>
            </Form>
          );
        }}
      </Formik>
      <NotificationApi response={mutation} showSuccess={true}>
        {mutation.isSuccess && (
          <>
            <p>Staff is added</p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Name: {mutation.data.data.name}</p>
            <p className="m-0">Hub: {mutation.data.data.hubId} </p>
          </>
        )}
      </NotificationApi>
    </div>
  );
}

export default AddStaff;
