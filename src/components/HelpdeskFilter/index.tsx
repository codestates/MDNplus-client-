import { Wrapper } from "./styles";

type HelpdeskFilterProps = {
  active: string;
  handleFilter: (type: string) => void;
};

function HelpdeskFilter({ active, handleFilter }: HelpdeskFilterProps) {
  return (
    <Wrapper active={active}>
      <button
        className="helpdesk-filter"
        onClick={() => {
          handleFilter("최신순");
        }}
      >
        최신순
      </button>
      <button
        className="helpdesk-filter"
        onClick={() => {
          handleFilter("인기순");
        }}
      >
        인기순
      </button>
    </Wrapper>
  );
}

export default HelpdeskFilter;
