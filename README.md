# JAWABAN TEST MSIG BACKEND ENGINEER

## 1.	Link Repo:
Order Service: https://github.com/BiasCoder/msig-order-service
Payment Service: https://github.com/BiasCoder/msig-payment-service
Notification Service: https://github.com/BiasCoder/msig-notification-service

## 2.	Jawaban:
a) Dalam kondisi apa retry tidak boleh dilakukan?
Retry tidak boleh dilakukan pada error yang bersifat permanen seperti respon 4xx (misalnya bad request atau unauthorized), pada operasi yang tidak idempotent, atau ketika request kemungkinan sudah berhasil diproses tetapi response tidak diterima, karena dapat menyebabkan duplikasi eksekusi (misalnya double charge).

## b) Perbedaan retry dan circuit breaker?
Retry digunakan untuk mencoba kembali request yang gagal akibat masalah sementara, sedangkan circuit breaker digunakan untuk menghentikan sementara request ke service yang sedang bermasalah guna mencegah overload dan cascading failure.

## c) apa resiko retry tanpa jitter atau backoff?
Tanpa penggunaan jitter atau backoff, retry dapat menyebabkan lonjakan traffic secara bersamaan (thundering herd), memperparah kondisi service, serta berpotensi menimbulkan overload pada sistem.

## 3.	Jawaban:
a) Informasi minimum yang wajib ada di setiap log adalah timestamp, level log (INFO/ERROR), service name, traceId atau requestId, endpoint atau action yang dijalankan, serta pesan log yang jelas. Hal ini penting untuk memudahkan analisis dan korelasi antar service.

b) Untuk menelusuri satu request dari awal sampai akhir, dapat digunakan traceId yang sama di setiap service. TraceId ini dikirim melalui header request dan diteruskan ke service berikutnya, sehingga seluruh log yang terkait dapat dikumpulkan dan ditelusuri secara end-to-end menggunakan tools seperti centralized logging atau distributed tracing.

c) Jika traceId tidak konsisten antar service, maka request tidak dapat ditelusuri secara menyeluruh. Hal ini akan menyulitkan proses debugging, meningkatkan waktu investigasi, dan berpotensi menyebabkan kesalahan analisis karena log antar service tidak dapat dikorelasikan dengan benar.

## 4. Jawaban:
a) Untuk memastikan consumer bersifat idempotent, setiap event harus memiliki identifier unik (misalnya eventId atau version). Consumer perlu melakukan pengecekan apakah event tersebut sudah pernah diproses sebelumnya, misalnya dengan menyimpan log atau status di database. Jika event sudah diproses, maka event tersebut diabaikan sehingga tidak terjadi duplikasi efek.

b) Ordering pada umumnya dijamin oleh broker dalam lingkup tertentu, misalnya pada Kafka ordering dijaga per partition. Namun, consumer tetap perlu memastikan pemrosesan dilakukan secara berurutan, terutama jika menggunakan paralelisme. Jadi, ordering adalah kombinasi tanggung jawab broker dan cara consumer memproses event.

c) Jika ordering tidak terjaga, maka data dapat menjadi tidak konsisten. Contohnya, event update yang lebih lama dapat menimpa data yang lebih baru, sehingga menyebabkan state yang salah, inkonsistensi data, dan potensi error pada business logic.

## 5. Jawaban:
a) Cache harus di-invalidate ketika data sumber (database) mengalami perubahan, seperti saat terjadi update, delete, atau insert yang mempengaruhi data tersebut. Selain itu, cache juga dapat menggunakan TTL (time-to-live) untuk memastikan data tidak terlalu stale.

b) Cache tidak boleh dijadikan source of truth karena sifatnya hanya sebagai penyimpanan sementara untuk mempercepat akses. Source of truth tetap berada di database untuk menjaga konsistensi dan keakuratan data.

c) Cache stampede dapat dicegah dengan menggunakan teknik seperti TTL dengan randomization (jitter), locking (misalnya mutex) agar hanya satu request yang melakukan refresh cache, serta menerapkan strategi seperti request coalescing atau stale-while-revalidate.

## 6. Jawaban:
a) Penggunaan API key saja belum cukup karena API key bersifat statis dan rentan bocor. Untuk komunikasi antar microservice yang lebih aman, sebaiknya digunakan mekanisme tambahan seperti mTLS, OAuth2, atau JWT dengan validasi yang kuat.

b) Untuk mencegah service palsu mengakses API internal, dapat diterapkan mutual TLS (mTLS) sehingga hanya service yang memiliki sertifikat valid yang dapat berkomunikasi. Selain itu, dapat digunakan service-to-service authentication, network restriction (misalnya private network/VPC), serta validasi token atau signature.

c) Penggunaan JWT tanpa expiry pendek berisiko tinggi karena token yang bocor dapat digunakan dalam jangka waktu lama tanpa bisa segera dibatasi. Hal ini dapat membuka celah akses tidak sah ke sistem internal dan meningkatkan risiko keamanan.



