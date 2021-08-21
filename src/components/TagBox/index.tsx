import React from "react";

type TagBoxProps = {
  handleEnter: (e: React.KeyboardEvent<HTMLDivElement>) => Promise<void>;
  tags: string[];
  handleDeleteTag: (tag: string) => void;
  tagValue: string;
  handleChangeTag: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TagBox({
  handleEnter,
  tags,
  handleDeleteTag,
  tagValue,
  handleChangeTag,
}: TagBoxProps) {
  return (
    <div onKeyPress={handleEnter}>
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
    </div>
  );
}

export default TagBox;
