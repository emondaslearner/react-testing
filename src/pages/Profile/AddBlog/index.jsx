import React, { useEffect, useState } from "react";
import Label from "../../../components/ui/Label";
import TextInput from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { useMutation } from "react-query";
import { addBlog } from "../../../apis/blog";
import { queryClient } from "../../../App";
import { error, success } from "../../../utils/alert";
import { useDispatch } from "react-redux";
import { ChangeLoaderStatus } from "../../../store/slice/loader";

const AddBlog = () => {
  const dispatch = useDispatch();

  // input contents
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: addBlog,
    mutationKey: ["addBlog"],
    onSuccess: (data) => {
      if (!data.error) {
        queryClient.invalidateQueries({
          queryKey: ["userArticle"],
        });
        queryClient.invalidateQueries({
          queryKey: ["blogs"],
        });
        setTitle("");
        setContent("");
        success({ message: "Blog added successfully" });
      } else if (!data?.err?.unauthorized) {
        error({ message: "Something went wrong. Please try again later" });
      }
    },
  });

  useEffect(() => {
    dispatch(ChangeLoaderStatus(isLoading));
  }, [isLoading, dispatch]);

  const AddBlog = async (e) => {
    e.preventDefault();
    await mutate({
      title,
      content,
    });
  };

  return (
    <div>
      <h1 data-testid="add-blog-heading" className="text-[20px] font-bold mt-4">
        Add Blogs
      </h1>

      <form data-testid="add-blog-form" onSubmit={AddBlog} action="" className="w-full">
        <div data-testid="add-blog-title" className="mt-3">
          <Label data-testid="add-blog-title-label" >Title</Label>
          <TextInput
            data-testid="add-blog-title-input"
            type="text"
            className="w-full rounded-[5px] mt-1"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div data-testid="add-blog-content" className="mt-3">
          <Label data-testid="add-blog-content-label">Content</Label>
          <textarea
            data-testid="add-blog-content-input"
            name=""
            className="w-full mt-1 outline-none bg-transparent px-[20px] border-[1px] border-gray-400 rounded-[5px] py-2"
            id=""
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Content"
            required
          ></textarea>
        </div>

        <Button
          type="submit"
          className="px-[50px] rounded-[5px] mt-3 mx-auto table"
          data-testid="add-blog-btn"
        >
          Add Blog
        </Button>
      </form>
    </div>
  );
};

export default AddBlog;
