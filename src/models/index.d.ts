import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerBoardMember = {
  readonly id: string;
  readonly name?: string | null;
  readonly photo_url?: string | null;
  readonly bio?: string | null;
  readonly degree?: string | null;
  readonly position?: string | null;
  readonly linkedin_url?: string | null;
  readonly facebook_url?: string | null;
  readonly instagram_url?: string | null;
}

type LazyBoardMember = {
  readonly id: string;
  readonly name?: string | null;
  readonly photo_url?: string | null;
  readonly bio?: string | null;
  readonly degree?: string | null;
  readonly position?: string | null;
  readonly linkedin_url?: string | null;
  readonly facebook_url?: string | null;
  readonly instagram_url?: string | null;
}

export declare type BoardMember = LazyLoading extends LazyLoadingDisabled ? EagerBoardMember : LazyBoardMember

export declare const BoardMember: (new (init: ModelInit<BoardMember>) => BoardMember) & {
  copyOf(source: BoardMember, mutator: (draft: MutableModel<BoardMember>) => MutableModel<BoardMember> | void): BoardMember;
}