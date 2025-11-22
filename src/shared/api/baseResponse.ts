export type BaseResponse<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
  success: boolean;
};

export type BasePagedResponse<T> = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  first: boolean;
  last: boolean;
  empty: boolean;
};
