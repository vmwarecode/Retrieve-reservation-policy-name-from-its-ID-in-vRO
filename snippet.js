var tenant = System.getContext().getParameter("__asd_tenantRef");
var host = vCACCAFEHostManager.getDefaultHostForTenant(tenant, true);
var reservationPolicyService = host.createReservationClient().getReservationReservationPolicyService();
var reservationPolicy = reservationPolicyService.getReservationPolicy(reservationPolicyID);
 
 
return reservationPolicy.name;