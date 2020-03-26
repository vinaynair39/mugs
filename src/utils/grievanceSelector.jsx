export default (grievances, { text, pending, startDate, endDate }) => {

  return grievances.filter((grievance) => {
    const textMatch = grievance.title.toLowerCase().includes(text.toLowerCase());
    const pendings = pending ?  grievance.status == -2 : true;
    return pendings && textMatch;
  })
};