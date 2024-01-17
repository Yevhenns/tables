type Data = DataItem[];

type DataItem = {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
  profiles: Profiles;
};

type Profiles = Profile[];

type Profile = {
  profileId: string;
  country: string;
  marketplace: string;
  campaigns: Campaigns;
};

type Campaigns = Campaign[];

type Campaign = {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
};
