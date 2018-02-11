//ReSharper disable All
using System;
using System.Collections.Generic;

namespace CutieShop.API.DB.Models.DAO
{
    interface IDAO<TId, TObj> : IDisposable
    {
        bool Create(TObj obj);
        TObj Read(TId id);
        IEnumerable<TObj> ReadAll();
        bool Update(TObj obj);
        bool Delete(TId id);
    }
}
