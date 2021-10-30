import React from "react";
import styled from "styled-components";

type TagInputProps = {
  tags: string[];
  tagValue: string;
  handleDeleteTag: (tag: string) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLDivElement>) => Promise<void>;
  handleChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TagInput({
  tags,
  tagValue,
  handleDeleteTag,
  handleEnter,
  handleChangeTag,
}: TagInputProps) {
  return (
    <Wrapper onKeyPress={handleEnter}>
      {tags.length === 0
        ? null
        : tags.map((el, idx) => (
            <span
              className="tag"
              onClick={() => {
                handleDeleteTag(el);
              }}
              key={idx + 1}
            >
              {el}
            </span>
          ))}
      <input
        className="input-box"
        value={tagValue}
        onChange={handleChangeTag}
        placeholder="태그를 입력해주세요"
      />
    </Wrapper>
  );
}

export default TagInput;

const Wrapper = styled.div`
  .input-box {
    border: none;
    outline: none;
  }
`;
