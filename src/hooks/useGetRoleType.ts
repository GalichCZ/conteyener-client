import {
    roleType1,
    roleType2,
    roleType3,
    roleType4,
    roleType5,
    roleType6,
    roleType7,
    roleType8
} from "@/features/Table/enums/roleTypes.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetRoleType = () => {
    const user = useAppSelector(state => state.authentication.user);

    if (!user) return null;
    
    const isNewOne = user.role === "new_one";
    const isRoleType1 = roleType1[user.role as keyof typeof roleType1] !== undefined;
    const isRoleType2 = roleType2[user.role as keyof typeof roleType2] !== undefined;
    const isRoleType3 = roleType3[user.role as keyof typeof roleType3] !== undefined;
    const isRoleType4 = roleType4[user.role as keyof typeof roleType4] !== undefined;
    const isRoleType5 = roleType5[user.role as keyof typeof roleType5] !== undefined;
    const isRoleType6 = roleType6[user.role as keyof typeof roleType6] !== undefined;
    const isRoleType7 = roleType7[user.role as keyof typeof roleType7] !== undefined;
    const isRoleType8 = roleType8[user.role as keyof typeof roleType8] !== undefined;

    return {
        isNewOne,
        isRoleType1,
        isRoleType2,
        isRoleType3,
        isRoleType4,
        isRoleType5,
        isRoleType6,
        isRoleType7,
        isRoleType8
    }
}