


export default function useFormikForm() {


    const handleSubmit = async (_values, { setSubmitting, resetForm }) => {
        try {
            setSubmitting(true);
            
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 20000);
            });
        } catch (error) {
            console.log(error);
        } finally {
            console.log('finished.');
            resetForm();
            setSubmitting(false);
        }
    }

    return {
        handleSubmit
    }
}
