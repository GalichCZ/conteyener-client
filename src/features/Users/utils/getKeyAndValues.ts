import { RolesEnum, RolesLabelEnum } from "@/enums/rolesEnum.ts";
import { SelectOption } from "@/Types";

export const getKeyAndValues = (): SelectOption[] => {
    const roleValues = Object.values(RolesEnum);
    const roleLabels = Object.values(RolesLabelEnum);

    return roleValues.map((role, index) => ({ key: role, value: roleLabels[index] }))
}