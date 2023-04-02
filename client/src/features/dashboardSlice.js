import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllPckd, getPckdInfo, getHitById } from "../services/pckd.service";

export const getUserPckds = createAsyncThunk(
  "dashboard/getUserPckds",
  async (props) => {
    const data = await getAllPckd();
    return data;
  }
);

export const selectPckd = createAsyncThunk(
  "dashboard/selectPckd",
  async (id) => {
    const data = await getPckdInfo(id);
    return data;
  }
);

export const selectHit = createAsyncThunk("dashboard/selectHit", async (id) => {
  // If no id is provided, return
  if (!id) return null;

  const data = await getHitById(id);
  return data;
});

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    userPckds: [],
    activePckd: null,
  },
  reducers: {
    selectHit: (state, action) => {
      state.selectedHit = action.payload;
    },
  },
  extraReducers: {
    [getUserPckds.fulfilled]: (state, action) => {
      state.userPckds = action.payload;
    },
    [selectPckd.fulfilled]: (state, action) => {
      state.activePckd = action.payload;
    },
    [selectHit.fulfilled]: (state, action) => {
      state.activeHit = action.payload;
    },
    [getUserPckds.rejected]: (state, action) => {
      toast.error(`Query Failed: ${action.error.message}`);
    },
    [selectPckd.rejected]: (state, action) => {
      toast.error(`Query Failed: ${action.error.message}`);
    },
    [selectHit.rejected]: (state, action) => {
      toast.error(`Query Failed: ${action.error.message}`);
    },
  },
});

// export const { selectHit } = dashboardSlice.actions;

export const selectUserPckds = (state) => state.dashboard.userPckds;

export default dashboardSlice.reducer;
