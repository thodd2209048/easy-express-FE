import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import GeneralInput from "~/components/input/GeneralInput/GeneralInput";
import RegionInput from "~/components/input/RegionInput/RegionInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";

import { updateHub } from "~/features/hub/api/api";
import schemas from "~/features/hub/config/schemas";

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
          provinceCode: `${item.district.province.code}`,
          districtCode: `${item.district.code}`,
        }}
        validationSchema={schemas.updateHub}
        onSubmit={({ name, location, districtCode }) => {
          mutation.mutate({ name, location, districtCode });
        }}
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
              <RegionInput />
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
