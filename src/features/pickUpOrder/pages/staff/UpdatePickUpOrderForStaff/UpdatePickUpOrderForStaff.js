import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { Field, Form, Formik } from "formik";

import { memo, useEffect } from "react";
import ConstantInput from "~/components/input/ConstantInput/ConstantInput";
import NotificationApi from "~/components/ui/NotificationApi/NotificationApi";
import { updatePickUpOrderForStaff } from "~/features/pickUpOrder/api/api";
import { pickUpOrderStatusForStaffUpdate } from "~/features/pickUpOrder/config/constant";
import schemas from "~/features/pickUpOrder/config/schemas";
import styles from "./UpdatePickUpOrderForStaff.module.scss";

UpdatePickUpOrderForStaff.propTypes = {};

function UpdatePickUpOrderForStaff({ id, initData, setShowUpdate }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => {
      return updatePickUpOrderForStaff(id, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickUpOrder", id] });
      queryClient.refetchQueries({ queryKey: ["pickUpOrder", id] });
    },
  });

  useEffect(() => {
    if (mutation.isSuccess) {
      setShowUpdate(false);
    }
  }, [mutation, setShowUpdate]);
  return (
    <div className={clsx(styles.wrapper, "mt-2")}>
      {!mutation.isSuccess && (
        <Formik
          initialValues={{
            status: initData?.status,
          }}
          validationSchema={schemas.updatePickUpOrderByStaff}
          onSubmit={(values) => {
            mutation.mutate(values);
          }}
        >
          {({
            touched,
            errors,
            isSubmitting,
            resetForm,
            values,
            isValid,
            dirty,
          }) => {
            // console.log("errors", errors);
            return (
              <Form className="mt-3">
                <Field name="status">
                  {({ field, form, meta }) => {
                    return (
                      <>
                        <ConstantInput
                          label={"Status"}
                          options={pickUpOrderStatusForStaffUpdate}
                          field={field}
                          form={form}
                          meta={meta}
                        />
                      </>
                    );
                  }}
                </Field>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      className="btn btn-primary me-3"
                      type="submit"
                      disabled={mutation.isPending || !isValid || !dirty}
                    >
                      Update
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
              </Form>
            );
          }}
        </Formik>
      )}
      <NotificationApi
        response={mutation}
        showSuccess={false}
      ></NotificationApi>
    </div>
  );
}

export default memo(UpdatePickUpOrderForStaff);
