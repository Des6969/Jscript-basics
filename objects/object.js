//
const laptop = {
  company: "Dell",
  modelNo: 5625,
  launchDate: 2023,
  fullName: function () {
    return this.company + this.modelNO + this.launchDate;
  },
};
console.log(laptop);
