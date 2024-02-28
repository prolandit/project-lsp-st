import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../common/types';

type UserStateType = {
    user: UserType | null;
};

const initialState: UserStateType = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserType | null>) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
