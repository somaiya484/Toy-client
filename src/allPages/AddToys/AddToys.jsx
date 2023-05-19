import { useForm } from "react-hook-form";



const AddToys = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className=" bg-purple-50 p-5 h-[500px] flex justify-center align-middle px-10">
      <form onSubmit={handleSubmit(onSubmit)}>


        <input
          className="border-purple-500 border-2 p-4 m-2 rounded w-3/4"
          {...register("image", {required:true})}
          placeholder="Image URL"
          type="url"
        />
        <div className="flex ">
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-1/4"
            {...register("userName", {required:true})}
            placeholder="Name"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-2/4"
            {...register("sellerEmail", {required:true})}
            type="email"
            placeholder="Email"
            
          />
        </div>
        <div className="flex">
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded"
            {...register("price", {required:true})}
            placeholder="Price"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded"
            {...register("rating", {required:true})}
            placeholder="Rating"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded "
            {...register("quantity", {required:true})}
            placeholder="Available quantity"
          />
        </div>
        <input
          className="border-purple-500 border-2 p-4 m-2 rounded block w-full"
          {...register("description", {required:true})}
          placeholder="Detail description"
        />





        {errors.exampleRequired && <span>This field is required</span>}

        <input className=" w-2/4 py-2 px-5 bg-purple-700 text-white text-sm font-bold text-center m-10 rounded-sm" type="submit" />
      </form>
    </div>

  );
};

export default AddToys;