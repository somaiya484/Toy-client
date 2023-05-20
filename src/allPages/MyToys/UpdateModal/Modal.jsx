import { useForm } from "react-hook-form";

function Modal({ isOpen, onClose, props }) {

    if (!isOpen) return null;

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const { handleUpdateInformation } = props



    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-purple-100 rounded-lg p-4">

                <form onSubmit={handleSubmit(onsubmit)} className="mt-12">
                    <div className="flex">
                        <input
                            className="border-purple-500 border-2 p-4 m-2 rounded"
                            {...register("price", { required: true })}
                            placeholder="Price"
                        />
                        <input
                            className="border-purple-500 border-2 p-4 m-2 rounded "
                            {...register("quantity", { required: true })}
                            placeholder="Available quantity"
                        />
                    </div>
                    <input
                        className="border-purple-500 border-2 p-4 m-2 rounded block w-full"
                        {...register("description", { required: true })}
                        placeholder="Detail description"
                    />


                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className=" w-2/4 py-3 px-5 bg-purple-700 text-white text-sm font-bold text-center m-10 rounded mt-4 ml-2 cursor-pointer" type="submit" value='Update Info' />
                </form>
                <button onClick={onClose} className="btn">Close</button>
            </div>
        </div>
    );
}

export default Modal;
