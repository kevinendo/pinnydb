import axios from "axios";

export default axios.create({
    baseURL: "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/pinnydb-sktje/service/Pins/incoming_webhook",
//    baseURL: "https://figpindb-backend.herokuapp.com/api/v1/pinnydb",
    headers: {
        "Content-type": "application/json"
    }
});
