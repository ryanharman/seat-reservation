export const convertAuditDates = <T extends Record<string, any>>(data: T) => {
  return {
    createdAt: new Date(data.createdAt),
    updatedAt: new Date(data.updatedAt),
  };
};

export const convertResponseDates = <T>(data: T | T[]) => {
  if (Array.isArray(data)) {
    return data.reduce(
      (acc, curr) => [
        ...acc,
        {
          ...curr,
          ...convertAuditDates(curr),
        },
      ],
      [] as T[]
    );
  } else {
    return {
      ...data,
      ...convertAuditDates(data),
    };
  }
};
