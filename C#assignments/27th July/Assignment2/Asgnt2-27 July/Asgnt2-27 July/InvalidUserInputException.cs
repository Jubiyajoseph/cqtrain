﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Asgnt2_27_July
{
    public class InvalidUserInputException: Exception
    {
        public InvalidUserInputException(string message) : base(message)
        {

        }
    }
}
