import FAQData from "../FAQData";
const FAQDATA = "faqData/FAQDATA" as const;

type FAQdata = {
  frequent: {
    tagName: string;
    info: { title: string; body: string }[];
  };
  service: {
    tagName: string;
    info: { title: string; body: string }[];
  };
  login: {
    tagName: string;
    info: { title: string; body: string }[];
  };
  howToUse: {
    tagName: string;
    info: { title: string; body: string }[];
  };
  support: {
    tagName: string;
    info: { title: string; body: string }[];
  };
};

export const faqData = (data: FAQdata) => ({ type: FAQDATA, payload: data });

type faqDataType = ReturnType<typeof faqData>;

type InitialState = {
  data: FAQdata;
};

const initialData = {
  data: FAQData,
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
