import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../authProviders/AuthProvider';
import swal from "sweetalert";

const AddToys = () => {
  const { user } = useContext(AuthContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
    fetch("http://localhost:5000/addToys", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
      if(onSubmit){
        swal("Great!", "Your data successfully added", "success");
      }
    
  };


  return (
    <div className=" bg-purple-50 p-5 h-[500px] flex justify-center align-middle px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-2/4"
            {...register("image", { required: true })}
            placeholder="Image URL"
            type="url"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-1/4"
            {...register("toyName", { required: true })}
            placeholder="Toy Name"
          />
        </div>
        <div className="flex ">
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-1/4"
            {...register("userName", { required: true })}
            placeholder="Name"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded w-2/4"
            {...register("sellerEmail", { required: true })}
            type="email"
            placeholder="Email"
            value={user?.email}
          />
        </div>
        <select className="border-purple-500 border-2 p-4 m-2 rounded w-2/4" {...register("status")}>
          <option value="category">Category</option>
          <option value=" mathToys"> Math Toys</option>
          <option value="languageToys">Language Toys</option>
          <option value="scienceToys">Science Toys</option>
        </select>

        <div className="flex">
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded"
            {...register("price", { required: true })}
            placeholder="Price"
          />
          <input
            className="border-purple-500 border-2 p-4 m-2 rounded"
            {...register("rating", { required: true })}
            placeholder="Rating"
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

        <input className=" w-2/4 py-3 px-5 bg-purple-700 text-white text-sm font-bold text-center m-10 rounded mt-4 ml-2 cursor-pointer" type="submit" />
      </form>
    </div>

  );
};

export default AddToys;