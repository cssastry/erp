<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import Grid from "svelte-grid-responsive";
    import { jsPDF } from 'jspdf';
    import 'jspdf-autotable';

    let selectedDate = '';
    let uniqueDates = [];

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const payslipsData = [
        {
            id: 1,
            date: "30-04-2024",
            noOfWorkingDays: 30,
            noOfDaysWorked: 30,
            netPay: 20000,
        },
        {
            id: 2,
            date: "31-03-2024",
            noOfWorkingDays: 31,
            noOfDaysWorked: 30,
            netPay: 20000,
        },
        {
            id: 3,
            date: "29-02-2024",
            noOfWorkingDays: 29,
            noOfDaysWorked: 22,
            netPay: 20000,
        },
        {
            id: 4,
            date: "31-01-2024",
            noOfWorkingDays: 31,
            noOfDaysWorked: 31,
            netPay: 20000,
        },
        {
            id: 5,
            date: "31-12-2023",
            noOfWorkingDays: 31,
            noOfDaysWorked: 30,
            netPay: 20000,
        },
        {
            id: 6,
            date: "30-11-2023",
            noOfWorkingDays: 30,
            noOfDaysWorked: 28,
            netPay: 20000,
        },
    ];

    onMount(() => {
        uniqueDates = Array.from(new Set(payslipsData.map(item => {
            const [day, month, year] = item.date.split('-');
            return `${year}-${month}-${day}`;
        })));
    });

    let filteredPayslips = [];

    function handleChange(event) {
        selectedDate = event.target.value;
        filteredPayslips = payslipsData.filter(item => {
            const [day, month, year] = item.date.split('-');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate === selectedDate;
        });
    }

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
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
            netPayable: formatCurrency(netPayable),
        }
    }

    function formatAmountToWords(num) {
        console.log(num);
        num = num / 100;
        console.log(num);
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        const thousands = ['', 'Thousand', 'Lakh'];

        // Function to convert three digits into words
        function convertThreeDigits(num) {
            let result = '';
            let hundreds = Math.floor(num / 100);
            let tensUnits = num % 100;

            if (hundreds !== 0) {
                result += units[hundreds] + ' Hundred ';
            }

            if (tensUnits !== 0) {
                if (tensUnits < 10) {
                    result += units[tensUnits];
                } else if (tensUnits < 20) {
                    result += teens[tensUnits - 10];
                } else {
                    let tensDigit = Math.floor(tensUnits / 10);
                    let unitsDigit = tensUnits % 10;
                    result += tens[tensDigit] + ' ' + units[unitsDigit];
                }
            }

            return result.trim();
            }

            if (num === 0) {
                return 'Zero';
            }

            let words = '';
            let count = 0;

            while (num > 0) {
                let part = num % 1000;
                if (part !== 0) {
                    words = convertThreeDigits(part) + ' ' + thousands[count] + ' ' + words;
                }
                num = Math.floor(num / 1000);
                count++;
            }

            return words.trim();
    }

    function formatCurrency(amount) {
        const numericAmount = parseFloat(amount);
        if (!isNaN(numericAmount)) {
            const formattedAmount = numericAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return `₹${formattedAmount}`;
        } else {
            return amount;
        }
    }

    function downloadPDF() {
        const monthYear = formatDate(selectedDate).toLowerCase(); // Get the selected month and year in lowercase
        const fileName = `payslip-${monthYear}.pdf`;

        const doc = new jsPDF();

        // Add content to the PDF
        filteredPayslips.forEach((payslip, index) => {
            const { basicPay, HRA, otherAllowances, EPF, PF, LOP, gross, deductions, netPayable } = payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked);

            // Add payslip details to the PDF
            doc.text(`Payslip ${index + 1}`, 10, 10);
            doc.text(`Basic Pay: ${basicPay}`, 10, 20);
            doc.text(`HRA: ${HRA}`, 10, 30);
            // Add other details similarly

            // Add a page break for each payslip
            if (index !== filteredPayslips.length - 1) {
                doc.addPage();
            }
        });

        // Save the PDF
        doc.save(fileName);
    }

</script>

<svelte:head>
	<title>Payslips</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="payslips">
    <div class="banner-text">
        <div class="head">
            <select bind:value={selectedDate} on:change={handleChange} required>
                <option value="" disabled selected hidden>Choose month and year</option>
                {#each uniqueDates as date}
                    <option value={date}>{formatDate(date)}</option>
                {/each}
            </select>
            {#if filteredPayslips.length>0}
            <button class="download" on:click={downloadPDF}>Download</button>
            {:else}
                <div class="joining">
                    <h6>Date of joining: <span>31-11-2023</span></h6>
                </div>
            {/if}
        </div>
        <div class="data">
            {#if filteredPayslips.length > 0}
                {#each filteredPayslips as payslip}    
                    <div class="pay-details">
                        <h6>Pay Date: <span>{payslip.date}</span></h6>
                        <h6>Net Pay: <span>{formatCurrency(payslip.netPay)}</span></h6>
                    </div>
                    <div class="pay-days">
                        <h6>No. of working days: <span>{payslip.noOfWorkingDays}</span></h6>
                        <h6>No. of days worked: <span>{payslip.noOfDaysWorked}</span></h6>
                    </div>
                    <div class="pay-data">
                        <Grid xs={12} md={6} lg={6}>
                            <div class="earnings-data">
                                <h2 class="table-head">Earnings</h2>
                                <div class="earnings">
                                    <div class="labels">
                                        <h2>Basic Pay</h2>
                                        <h2>HouseRent Allowance</h2>
                                        <h2>Other Allowance</h2>
                                    </div>
                                    <div class="pay-data-details">
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).basicPay}</span></h2>
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).HRA}</span></h2>
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).otherAllowances}</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="earning-data">
                                <div class="earnings">
                                    <div class="labels">
                                        <h2>Gross Earning</h2>
                                    </div>
                                    <div class="pay-data-details">
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).gross}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} md={6} lg={6}>
                            <div class="deductions-data">
                                <h2 class="table-head">Deductions</h2>
                                <div class="deductions">
                                    <div class="labels">
                                        <h2>EPF contribution</h2>
                                        <h2>Professional Tax</h2>
                                        <h2>LOP</h2>
                                    </div>
                                    <div class="pay-data-details">
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).EPF}</span></h2>
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).PF}</span></h2>
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).LOP}</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="deduction-data">
                                <div class="deductions">
                                    <div class="labels">
                                        <h2>Total Deductions</h2>
                                    </div>
                                    <div class="pay-data-details">
                                        <h2><span>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).deductions}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </div>
                    <Grid xs={12} md={12} lg={12}>
                        <div class="payable">
                            <h2>Total Net Payable:</h2>
                            <p>{payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).netPayable} <span>({formatAmountToWords(parseInt(payCalculations(payslip.netPay, payslip.noOfWorkingDays, payslip.noOfDaysWorked).netPayable.replace(/\D/g,'')))} rupees only)</span></p>
                        </div>
                    </Grid>
                {/each}
            {:else}
                <p>No data available for the selected month and year.</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .payslips {
        background-color: var(--side-nav-color);
        min-height: 89%;
        padding: 1rem 1.5rem;
        border-radius: 0.3rem;
    }
    .payslips select{
        padding: 0.5rem 2rem;
        background-color: var(--color-bg-3);
        border: none;
        color: var(--color-bg-2);
        border-radius: 0.3rem;
    }
    .data{
        margin-top: 1.5rem;
    }
    .banner-text h6{
        font-size: 18px;
        color: var(--color-text);
        margin: 0;
        font-weight: 500;
    }
    h6 span{
        font-size: 20px;
        color: var(--color-banner-text-1);
        font-weight: 500;
    }
    .banner-text p{
        font-size: 15px;
        color: var(--color-bg-1);
        margin-bottom: 0;
    }
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head .download{
        border: none;
        background-color: var(--color-special-text);
        color: var(--color-bg-2);
        font-size: 1.2rem;
        padding: 0.3rem 2rem;
        border-radius: 0.3rem;
        font-weight: 600;
    }
    .pay-details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5rem 1rem 1.5rem;
        border-bottom: 1px solid var(--color-special-text);
    }
    .pay-days{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 1.5rem 0rem 1.5rem;
    }
    .pay-days h6{
        font-size: 0.9rem;
    }
    .pay-days h6 span{
        font-size: 0.9em;
    }
    .pay-data{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .earnings-data, .deductions-data{
        /* border: 0.5px solid white; */
        width: 100%;
        border-bottom: 2px solid var(--color-special-text);
    }
    .earnings, .deductions{
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem 0.5rem 1.5rem;
    }
    .table-head{
        width: 100%;
        text-align: center;
        background-color: var(--color-bg-3);
        margin: 0;
        padding: 0.5rem 0;
        color: var(--color-special-text);
    }
    .labels{
        font-size: 1.1rem;
    }
    .pay-data-details{
        color: var(--color-bg-2);
        text-align: end;
    }
    .payable{
        display: flex;
        float: left;
        gap: 2rem;
        padding: 0.3rem 1.5rem;
        background-color: var(--color-bg-3);
        width: 96%;
        align-items: center;
    }
    .payable p{
        margin: 0;
        font-size: 1rem;
        color: var(--color-bg-2);
    }
    p span{
        font-size: 0.8rem;
    }
    .payable h2{
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-bg-2);
    }
</style>