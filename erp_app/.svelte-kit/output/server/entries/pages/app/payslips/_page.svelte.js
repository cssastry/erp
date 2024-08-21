import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { G as Grid } from "../../../../chunks/Grid.js";
import "jspdf";
import "jspdf-autotable";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".payslips.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{background-color:var(--side-nav-color);min-height:89%;padding:1rem 1.5rem;border-radius:0.3rem}.payslips.svelte-1y10n3u select.svelte-1y10n3u.svelte-1y10n3u{padding:0.5rem 2rem;background-color:var(--color-bg-3);border:none;color:var(--color-bg-2);border-radius:0.3rem}.data.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{margin-top:1.5rem}.banner-text.svelte-1y10n3u h6.svelte-1y10n3u.svelte-1y10n3u{font-size:18px;color:var(--color-text);margin:0;font-weight:500}h6.svelte-1y10n3u span.svelte-1y10n3u.svelte-1y10n3u{font-size:20px;color:var(--color-banner-text-1);font-weight:500}.banner-text.svelte-1y10n3u p.svelte-1y10n3u.svelte-1y10n3u{font-size:15px;color:var(--color-bg-1);margin-bottom:0}.head.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;justify-content:space-between;align-items:center}.head.svelte-1y10n3u .download.svelte-1y10n3u.svelte-1y10n3u{border:none;background-color:var(--color-special-text);color:var(--color-bg-2);font-size:1.2rem;padding:0.3rem 2rem;border-radius:0.3rem;font-weight:600}.pay-details.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;justify-content:space-between;align-items:center;padding:0 1.5rem 1rem 1.5rem;border-bottom:1px solid var(--color-special-text)}.pay-days.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;justify-content:space-between;align-items:center;padding:0.8rem 1.5rem 0rem 1.5rem}.pay-days.svelte-1y10n3u h6.svelte-1y10n3u.svelte-1y10n3u{font-size:0.9rem}.pay-days.svelte-1y10n3u h6.svelte-1y10n3u span.svelte-1y10n3u{font-size:0.9em}.pay-data.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;justify-content:space-between;margin-top:2rem}.earnings-data.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u,.deductions-data.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{width:100%;border-bottom:2px solid var(--color-special-text)}.earnings.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u,.deductions.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;justify-content:space-between;padding:0 1.5rem 0.5rem 1.5rem}.table-head.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{width:100%;text-align:center;background-color:var(--color-bg-3);margin:0;padding:0.5rem 0;color:var(--color-special-text)}.labels.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{font-size:1.1rem}.pay-data-details.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{color:var(--color-bg-2);text-align:end}.payable.svelte-1y10n3u.svelte-1y10n3u.svelte-1y10n3u{display:flex;float:left;gap:2rem;padding:0.3rem 1.5rem;background-color:var(--color-bg-3);width:96%;align-items:center}.payable.svelte-1y10n3u p.svelte-1y10n3u.svelte-1y10n3u{margin:0;font-size:1rem;color:var(--color-bg-2)}p.svelte-1y10n3u span.svelte-1y10n3u.svelte-1y10n3u{font-size:0.8rem}.payable.svelte-1y10n3u h2.svelte-1y10n3u.svelte-1y10n3u{font-size:1.2rem;font-weight:600;color:var(--color-bg-2)}",
  map: null
};
function formatAmountToWords(num) {
  console.log(num);
  num = num / 100;
  console.log(num);
  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];
  const thousands = ["", "Thousand", "Lakh"];
  function convertThreeDigits(num2) {
    let result = "";
    let hundreds = Math.floor(num2 / 100);
    let tensUnits = num2 % 100;
    if (hundreds !== 0) {
      result += units[hundreds] + " Hundred ";
    }
    if (tensUnits !== 0) {
      if (tensUnits < 10) {
        result += units[tensUnits];
      } else if (tensUnits < 20) {
        result += teens[tensUnits - 10];
      } else {
        let tensDigit = Math.floor(tensUnits / 10);
        let unitsDigit = tensUnits % 10;
        result += tens[tensDigit] + " " + units[unitsDigit];
      }
    }
    return result.trim();
  }
  if (num === 0) {
    return "Zero";
  }
  let words = "";
  let count = 0;
  while (num > 0) {
    let part = num % 1e3;
    if (part !== 0) {
      words = convertThreeDigits(part) + " " + thousands[count] + " " + words;
    }
    num = Math.floor(num / 1e3);
    count++;
  }
  return words.trim();
}
function formatCurrency(amount) {
  const numericAmount = parseFloat(amount);
  if (!isNaN(numericAmount)) {
    const formattedAmount = numericAmount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `₹${formattedAmount}`;
  } else {
    return amount;
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let uniqueDates = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let filteredPayslips = [];
  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  }
  const payCalculations = (netPay, noOfWorkingDays, noOfDaysWorked) => {
    let basicPay = 0.6 * netPay;
    let HRA = 0.4 * basicPay;
    let otherAllowances = netPay - (basicPay + HRA);
    let lossOfDays = noOfWorkingDays - noOfDaysWorked;
    let payPerDay = netPay / noOfWorkingDays;
    let LOP = lossOfDays * payPerDay;
    let gross = basicPay + HRA + otherAllowances;
    let EPF = 0;
    let PF = 0;
    let deductions = EPF + PF + LOP;
    let netPayable = gross - deductions;
    return {
      basicPay: formatCurrency(basicPay),
      HRA: formatCurrency(HRA),
      otherAllowances: formatCurrency(otherAllowances),
      LOP: formatCurrency(LOP),
      EPF: formatCurrency(EPF),
      PF: formatCurrency(PF),
      gross: formatCurrency(gross),
      deductions: formatCurrency(deductions),
      netPayable: formatCurrency(netPayable)
    };
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-mkphst_START -->${$$result.title = `<title>Payslips</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-mkphst_END -->`, ""} <div class="payslips svelte-1y10n3u"><div class="banner-text svelte-1y10n3u"><div class="head svelte-1y10n3u"><select required class="svelte-1y10n3u"><option value="" disabled selected hidden data-svelte-h="svelte-xtosc6">Choose month and year</option>${each(uniqueDates, (date) => {
    return `<option${add_attribute("value", date, 0)}>${escape(formatDate(date))}</option>`;
  })}</select> ${filteredPayslips.length > 0 ? `<button class="download svelte-1y10n3u" data-svelte-h="svelte-17l70af">Download</button>` : `<div class="joining" data-svelte-h="svelte-1k5qydj"><h6 class="svelte-1y10n3u">Date of joining: <span class="svelte-1y10n3u">31-11-2023</span></h6></div>`}</div> <div class="data svelte-1y10n3u">${filteredPayslips.length > 0 ? `${each(filteredPayslips, (payslip) => {
    return `<div class="pay-details svelte-1y10n3u"><h6 class="svelte-1y10n3u">Pay Date: <span class="svelte-1y10n3u">${escape(payslip.date)}</span></h6> <h6 class="svelte-1y10n3u">Net Pay: <span class="svelte-1y10n3u">${escape(formatCurrency(payslip.netPay))}</span></h6></div> <div class="pay-days svelte-1y10n3u"><h6 class="svelte-1y10n3u">No. of working days: <span class="svelte-1y10n3u">${escape(payslip.noOfWorkingDays)}</span></h6> <h6 class="svelte-1y10n3u">No. of days worked: <span class="svelte-1y10n3u">${escape(payslip.noOfDaysWorked)}</span></h6></div> <div class="pay-data svelte-1y10n3u">${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
      default: () => {
        return `<div class="earnings-data svelte-1y10n3u"><h2 class="table-head svelte-1y10n3u" data-svelte-h="svelte-fz6rbn">Earnings</h2> <div class="earnings svelte-1y10n3u"><div class="labels svelte-1y10n3u" data-svelte-h="svelte-1fjm7lw"><h2>Basic Pay</h2> <h2>HouseRent Allowance</h2> <h2>Other Allowance</h2></div> <div class="pay-data-details svelte-1y10n3u"><h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).basicPay)}</span></h2> <h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).HRA)}</span></h2> <h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).otherAllowances)}</span></h2></div> </div></div> <div class="earning-data"><div class="earnings svelte-1y10n3u"><div class="labels svelte-1y10n3u" data-svelte-h="svelte-1tjdiyb"><h2>Gross Earning</h2></div> <div class="pay-data-details svelte-1y10n3u"><h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).gross)}</span></h2></div> </div></div> `;
      }
    })} ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 6, lg: 6 }, {}, {
      default: () => {
        return `<div class="deductions-data svelte-1y10n3u"><h2 class="table-head svelte-1y10n3u" data-svelte-h="svelte-1lom526">Deductions</h2> <div class="deductions svelte-1y10n3u"><div class="labels svelte-1y10n3u" data-svelte-h="svelte-yo0lwv"><h2>EPF contribution</h2> <h2>Professional Tax</h2> <h2>LOP</h2></div> <div class="pay-data-details svelte-1y10n3u"><h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).EPF)}</span></h2> <h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).PF)}</span></h2> <h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).LOP)}</span></h2></div> </div></div> <div class="deduction-data"><div class="deductions svelte-1y10n3u"><div class="labels svelte-1y10n3u" data-svelte-h="svelte-wr1q23"><h2>Total Deductions</h2></div> <div class="pay-data-details svelte-1y10n3u"><h2><span>${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).deductions)}</span></h2></div> </div></div> `;
      }
    })}</div> ${validate_component(Grid, "Grid").$$render($$result, { xs: 12, md: 12, lg: 12 }, {}, {
      default: () => {
        return `<div class="payable svelte-1y10n3u"><h2 class="svelte-1y10n3u" data-svelte-h="svelte-6b01t">Total Net Payable:</h2> <p class="svelte-1y10n3u">${escape(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).netPayable)} <span class="svelte-1y10n3u">(${escape(formatAmountToWords(parseInt(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).netPayable.replace(/\D/g, ""))))} rupees only)</span></p></div> `;
      }
    })}`;
  })}` : `<p class="svelte-1y10n3u" data-svelte-h="svelte-1i44wor">No data available for the selected month and year.</p>`}</div></div> </div>`;
});
export {
  Page as default
};
