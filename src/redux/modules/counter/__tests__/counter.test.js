import {
  counterFetchCount,
  counterInitialState,
  COUNTER_FETCH_LOADING,
  COUNTER_FETCH_FULFILLED,
  COUNTER_FETCH_FAILURE
} from "../index";
import { counterMessages } from "../../../../utils/messags";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const fetchCountSuccessResponseData = [
  { id: "1", createdAt: 1495629470, count: -1 }
];

const fetchCountFailureResponseData = [];

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
        response: fetchCountSuccessResponseData // this IS response.data in the actual axios response
      });
    });

    const expectedActions = [
      { type: COUNTER_FETCH_LOADING },
      {
        type: COUNTER_FETCH_FULFILLED,
        payload: fetchCountSuccessResponseData[0].count
      }
    ];

    return store.dispatch(counterFetchCount()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("returns COUNTER_FETCH_FAILURE & error payload on SERVICE ERROR", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        response: fetchCountFailureResponseData
      });
    });

    const expectedActions = [
      { type: COUNTER_FETCH_LOADING },
      {
        type: COUNTER_FETCH_FAILURE,
        payload: counterMessages.serviceError
      }
    ];

    return store.dispatch(counterFetchCount()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("returns COUNTER_FETCH_FAILURE & error payload on INCORRECT RESPONSE", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fetchCountFailureResponseData
      });
    });

    const expectedActions = [
      { type: COUNTER_FETCH_LOADING },
      {
        type: COUNTER_FETCH_FAILURE,
        payload: counterMessages.incorrectResponse
      }
    ];

    return store.dispatch(counterFetchCount()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
