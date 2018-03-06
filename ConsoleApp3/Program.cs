using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    using System;
    using ConsoleApp3.Accounts;
    class Program
    {
        static void Main(string[] args)
        {
            GeneralAccountcs JohnAccount = new GeneralAccountcs(0);

            SavingsAccount savingsAccount = new SavingsAccount(50000);
            JohnSavingAccount.Setinterest(0.75);

            ChekingsAccount chekingsAccount = new CheckingsAccount(20000);
            JohnCheckingAccount.setinterest(14.50);

        }
    }
}
