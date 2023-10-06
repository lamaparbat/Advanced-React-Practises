import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useDeferredValue,
} from "react";
import { comments } from "./constants";

export const useHandler = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [commentLists, setCommentLists] = useState(comments);
  const originalLists = useRef(comments);
  const deferredKeyword = useDeferredValue(searchKeyword);

  useEffect(() => {
    setCommentLists((prev) => {
      return deferredKeyword
        ? prev?.filter((d) => d?.name?.includes(deferredKeyword))
        : comments;
    });
  }, [deferredKeyword]);

  const handleSearch = useCallback(
    (e) => {
      setSearchKeyword(e.target.value);
    },
    [originalLists.current.value],
  );

  return {
    searchKeyword,
    commentLists,
    handleSearch,
  };
};
