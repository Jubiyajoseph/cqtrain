using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Qn4
{
    public class MyGenericComparer<T> where T : IComparable            // Implementing IComparable interface
    {
        public T Compare(T val1, T val2)
        {
            if(val1.CompareTo(val2)>0)
            {
                return val1;
            }
            else
            {
                return val2;
            }
        }
    }
}
