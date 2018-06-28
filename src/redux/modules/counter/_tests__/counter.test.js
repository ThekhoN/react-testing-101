import {
  counterFetchCount,
  counterInitialState,
  COUNTER_FETCH_LOADING,
  COUNTER_FETCH_FULFILLED
} from "../index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const fetchCountSuccessResponse = {
  status: "SUCCESS",
  status: 200,
  statusText: "OK",
  data: [{ id: "1", createdAt: 1495629470, count: -1 }]
};

// counterFetchCount
describe("counterFetchCount ACTION-CREATOR", () => {
  let store = {};
  beforeEach(() => {
    store = mockStore({
      counter: counterInitialState
    });
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("returns COUNTER_FETCH_LOADING, COUNTER_FETCH_FULFILLED & payload on SUCCESS", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchCountSuccessResponse
      });
    });

    const expectedActions = [
      { type: COUNTER_FETCH_LOADING },
      { type: COUNTER_FETCH_FULFILLED }
    ];

    return store.dispatch(counterFetchCount()).then(() => {
      console.log("store.getActions(): ", store.getActions());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
