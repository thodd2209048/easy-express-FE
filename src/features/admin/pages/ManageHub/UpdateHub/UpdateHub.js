import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";

import { updateHub } from "../../../api/api";
import schemas from "../../../config/schemas";

import GeneralInput from "~/components/inputs/GeneralInput/GeneralInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

UpdateHub.propTypes = {
  item: PropTypes.object,
};

function UpdateHub({ item }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => updateHub(item.id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hubs"] });
    },
  });

  return (
    <>
      <Formik
        initialValues={{
          name: `${item.name}`,
          location: `${item.location}`,
        }}
        validationSchema={schemas.hub}
        onSubmit={(values) => mutation.mutate(values)}
      >
        {({ touched, errors, isSubmitting, resetForm }) => (
          <Form className="mt-2">
            {/* <p>Update</p> */}

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
              <Field name="location">
                {({ field, form, meta }) => (
                  <>
                    <GeneralInput
                      label="Location: "
                      type="text"
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
            <p>Hub is updated</p>
            <p className="m-0">Hub: {mutation.data.data.name} </p>
            <p className="m-0">Id: {mutation.data.data.id}</p>
            <p className="m-0">Location: {mutation.data.data.location}</p>
          </>
        )}
      </NotificationApi>
    </>
  );
}

export default UpdateHub;
