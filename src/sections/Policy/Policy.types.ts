interface PolicyData {
  attributes: {
    title: string;
    text: string;
  };
}

export interface IPolicyResponse {
  policy: {
    data: PolicyData;
  };
}
