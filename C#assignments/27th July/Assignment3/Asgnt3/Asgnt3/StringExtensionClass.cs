using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Asgnt3
{
    public static class StringExtensionClass
    {
        public static int WordCount(this string input, string word)
        {
            int count = 0;
            string[] txt = input.Split(' ');

            for (int i = 0; i < txt.Length; i++)
            {
                if (txt[i].Equals(word))
                {
                    count++;
                }
            }
            return count;
        }
    }
}
