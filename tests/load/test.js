import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";


export let errorRate = new Rate("errors");

export default function() {
  var url = "http://localhost:3000/admin/company/all";
  var params = {
      headers: {
          "Authorization": "Token ffc62b27db68502eebc6e90b7c1476d29c581f4d",
          "Content-Type": "application/json"
      }
  };
  check(http.get(url, params), {
    "status is 200": (r) => r.status == 200
  }) || errorRate.add(1);
};
