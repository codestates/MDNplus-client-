import FAQFakeData from "../pages/common/FAQ/FAQdata";

const FAQDATA = "faqData/FAQDATA" as const;

type FAQdata = {
  AllFAQdata: {
    label: {
      tagName: string;
      info: { title: string; body: string }[];
    };
  }[];
};

export const faqData = (data: FAQdata) => ({ type: FAQDATA, payload: data });

type faqDataType = ReturnType<typeof faqData>;

type InitialState = {
  data: FAQdata;
};

const initialData = {
  data: FAQFakeData,
};

function FAQdataReducer(state: InitialState = initialData, action: faqDataType): InitialState {
  switch (action.type) {
    case FAQDATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default FAQdataReducer;
