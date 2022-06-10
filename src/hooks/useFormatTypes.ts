import { useState } from "react";
import { useEffect } from "react";

import { useGetGroupTypes } from "@vie/api/queries/getGroupType";
import { useGetTypes } from "@vie/api/queries/getTypes";
import { Type } from "@vie/modules/Map/types";

export const useFormatTypes = () => {
  const typesQuery = useGetTypes();
  const groupQuery = useGetGroupTypes();

  const [groupedTypes, setGroupedTypes] = useState<Record<string, Type[]>>();
  const [groupOrder, setGroupOrder] = useState<Record<number, string>>();

  useEffect(() => {
    if (!typesQuery.data || groupedTypes !== undefined) return;
    const grouped: Record<string, Type[]> = {};
    const ordered: Record<number, string> = {};

    typesQuery.data.forEach((type) => {
      const groupName = type.group.name;
      if (!grouped[groupName]) grouped[groupName] = [];
      grouped[groupName].push(type);

      const groupOrder = type.group.order;
      if (!ordered[groupOrder]) ordered[groupOrder] = groupName;
    });

    setGroupedTypes(grouped);
    setGroupOrder(ordered);
  }, [typesQuery]);

  return {
    status: groupQuery.status,
    groupOrder,
    groupedTypes,
    groups: groupQuery.data,
  };
};
