using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class GeneralAccountcs
    {
        protected double saldo = 0.00;
        protected double amount = 0.00;
        protected double limit;
        protected string Owner { get; set; }
        public string IBAN;
        protected double interest = 0.00;

        public double GetInterest()
        {
            return this.interest;
        }

        public void SetInterest(double value)
        {
            this.interest = value;
        }

        public GeneralAccountcs(double limit)
        {
            this.limit = limit;
        }

        public void Deposit(double amount)
        {
            this.amount += amount;
            this.saldo += amount;
        }

        public virtual void Withdraw(double amount)
        {
            if (amount > saldo)
            {
                Console.WriteLine("Nedostatychno sredstva");
                return;
            }

            this.amount -= amount;
            this.saldo -= amount;
        }
    }
}
