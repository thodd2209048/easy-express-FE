import { useQuery } from "@tanstack/react-query";
import { listHub } from "../api";

export const useHubs = () => useQuery({ queryKey: ["hubs"], queryFn: listHub });
