using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3.Accounts
{
    using System;
    class SavingsAccount : GeneralAccountcs
    {
       public SavingsAccount(double limit) : base(limit)
        {

        }

        public override void Withdraw(double amount)
        { 
            throw new Exception("Cannot withdraw from Savings Account");
        }
    }
}
