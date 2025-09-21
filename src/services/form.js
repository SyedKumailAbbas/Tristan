import { supabase } from "../supabase/supabase";

export async function submitNewsletter({ fname, lname, email }) {
  const { error } = await supabase
    .from("newsletter_signups")
    .insert({ fname, lname, email });
  if (error) throw error;
}

export async function submitContact({
  fname,
  lname,
  email,
  eventDetails, // textarea #1
  serviceDetails, // textarea #2
  audienceGoal, // textarea #3
}) {
  const { error } = await supabase.from("contact_requests").insert({
    fname,
    lname,
    email,
    event_details: eventDetails || null,
    service_details: serviceDetails || null,
    audience_goal: audienceGoal || null,
  });

  if (error) throw error;
}
