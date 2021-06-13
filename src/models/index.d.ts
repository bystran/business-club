import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class BoardMember {
  readonly id: string;
  readonly name?: string;
  readonly photo_url?: string;
  readonly bio?: string;
  readonly degree?: string;
  readonly position?: string;
  readonly linkedin_url?: string;
  readonly facebook_url?: string;
  readonly instagram_url?: string;
  constructor(init: ModelInit<BoardMember>);
  static copyOf(source: BoardMember, mutator: (draft: MutableModel<BoardMember>) => MutableModel<BoardMember> | void): BoardMember;
}