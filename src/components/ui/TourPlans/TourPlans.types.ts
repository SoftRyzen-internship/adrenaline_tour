export interface ITourAttributesTourPlans {
  plans: {
    description: string;
    title: string;
  };
}

export interface ITourPlans {
  dataPlans: ITourAttributesTourPlans;
}
